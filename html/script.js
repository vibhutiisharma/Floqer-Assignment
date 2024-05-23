document.addEventListener('DOMContentLoaded', () => {
    const data = [
        {"year": 2020, "total_jobs": 1500, "average_salary": 110000},
        {"year": 2021, "total_jobs": 1600, "average_salary": 115000},
        {"year": 2022, "total_jobs": 1700, "average_salary": 120000},
        {"year": 2023, "total_jobs": 1800, "average_salary": 125000},
        {"year": 2024, "total_jobs": 1900, "average_salary": 130000}
    ];

    const tableBody = document.querySelector('#salaryTable tbody');

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td onclick="showSecondaryTable(${item.year})">${item.year}</td>
            <td>${item.total_jobs}</td>
            <td>${item.average_salary.toLocaleString('en-US')}</td>
        `;
        tableBody.appendChild(row);
    });

    const years = data.map(item => item.year);
    const totalJobs = data.map(item => item.total_jobs);

    const ctx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'Total Jobs',
                data: totalJobs,
                borderColor: 'blue',
                fill: false
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});

function sortTable(columnIndex) {
}

function showSecondaryTable(year) {
    const secondaryTableContainer = document.getElementById('secondaryTableContainer');
    const secondaryTable = document.getElementById('secondaryTable');
    const tableBody = secondaryTable.querySelector('tbody');
    
    tableBody.innerHTML = '';
    const secondaryData = [
        {"job_title": "Machine Learning Engineer", "number_of_jobs": 100},
        {"job_title": "Data Scientist", "number_of_jobs": 80},
        {"job_title": "AI Researcher", "number_of_jobs": 70},
    ];

    secondaryData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.job_title}</td>
            <td>${item.number_of_jobs}</td>
        `;
        tableBody.appendChild(row);
    });
    secondaryTableContainer.style.display = 'block';
}
