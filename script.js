import { listenToClassroom, setAppliance } from "./firebase.js";

const state={
  light:true,
  fan:true,
  ac:false,
  temperature:27.4,
  humidity:61,
  power:420,
  energy:4.82
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function updateUI() {
  setText("temperature", Number(state.temperature || 0).toFixed(1));
  setText("temp2", Number(state.temperature || 0).toFixed(1));
  setText("humidity", Number(state.humidity || 0));
  setText("hum2", Number(state.humidity || 0));
  setText("power", Number(state.power || 0));
  setText("energyToday", Number(state.energy || 0).toFixed(2));
  setText("cost", (Number(state.energy || 0) * 8).toFixed(2));

  const occupied = !!state.occupancy;
  setText("occupancy", occupied ? "OCCUPIED" : "VACANT");
  setText("occupancy2", occupied ? "Occupied" : "Vacant");
  setText("people", occupied ? "Motion detected" : "No motion detected");

  ["light", "fan", "ac"].forEach((k) => {
    const on = !!state[k];
    const status = document.getElementById(k + "Status");
    const text = document.getElementById(k + "Text");
    const btn = document.getElementById(k + "Btn");

    if (status) {
      status.textContent = on ? "ON" : "OFF";
      status.className = on ? "on" : "off";
    }
    if (text) text.textContent = "Currently " + (on ? "ON" : "OFF");
    if (btn) btn.textContent = on ? "TURN OFF" : "TURN ON";
  });
}

window.toggleAppliance = async function(name) {
  try {
    await setAppliance(name, !state[name]);
  } catch (error) {
    console.error("Firebase write error:", error);
    alert("Could not update Firebase. Check database rules and configuration.");
  }
};

document.querySelectorAll(".nav-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.page).classList.add("active");
  });
});

function clock() {
  const now = new Date();
  setText("clock", now.toLocaleTimeString());
  setText("lastUpdate", now.toLocaleTimeString());
}
setInterval(clock, 1000);
clock();

const labels = ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"];
const values = [0, 0, 0, 0, 0, 0, 0];

const energyChart = new Chart(document.getElementById("energyChart"), {
  type: "line",
  data: {
    labels,
    datasets: [{ label: "Energy (kWh)", data: values, tension: 0.35, fill: true }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

const analyticsChart = new Chart(document.getElementById("analyticsChart"), {
  type: "bar",
  data: {
    labels,
    datasets: [{ label: "Energy (kWh)", data: values }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: { y: { beginAtZero: true } }
  }
});

listenToClassroom((data) => {
  if (data.firebaseError) {
    console.error(data.firebaseError);
    return;
  }

  state.occupancy = data.occupancy ?? false;
  state.temperature = data.temperature ?? 0;
  state.humidity = data.humidity ?? 0;
  state.power = data.power ?? 0;
  state.energy = data.energy_today ?? 0;

  const appliances = data.appliances || {};
  state.light = !!appliances.light;
  state.fan = !!appliances.fan;
  state.ac = !!appliances.ac;

  updateUI();

  if (Array.isArray(data.energy_history)) {
    energyChart.data.datasets[0].data = data.energy_history;
    analyticsChart.data.datasets[0].data = data.energy_history;
    energyChart.update();
    analyticsChart.update();
  }
});

updateUI();
