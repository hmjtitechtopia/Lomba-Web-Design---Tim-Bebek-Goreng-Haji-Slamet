const ctx = document.getElementById("vtChart").getContext("2d");
const vtChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
            {
                label: "Jarak (daerah berwarna) (m)",
                data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                borderColor: "#3d3f6b",
                backgroundColor: "rgba(61, 63, 107, 0.2)",
                borderWidth: 2,
                fill: true,
                tension: 0,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: { display: true, text: "Waktu (s)" },
            },
            y: {
                title: { display: true, text: "Kecepatan (m/s)" },
                beginAtZero: true,
                suggestedMax: 10,
            },
        },
    },
});

gsap.to(".ball", {
    x: "85vw",
    duration: 5,
    ease: "linear",
    repeat: -1,
});