const projectFiles = [
    "data/22-storey-multipurpose-building.json",
    "data/school-cluster3.json",
    "data/medical-center.json",
    "data/government-center.json",
    "data/evacuation-center.json",
    "data/crematorium.json"
];

async function loadDashboard() {

    let allDocs = [];

    for (const file of projectFiles) {

        try {

            const response = await fetch(file);

            if (!response.ok) {
                console.error(`Cannot load ${file}`);
                continue;
            }

            const docs = await response.json();

            allDocs = allDocs.concat(docs);

        } catch (err) {

            console.error(err);

        }

    }

    // Totals
    document.getElementById("totalProjects").textContent = projectFiles.length;
    document.getElementById("totalDocuments").textContent = allDocs.length;

    // Status Counts
    document.getElementById("submitted").textContent =
        allDocs.filter(d => d.status === "Submitted").length;

    document.getElementById("approved").textContent =
        allDocs.filter(d => d.status === "Approved").length;

    document.getElementById("approvedAsCorrected").textContent =
        allDocs.filter(d => d.status === "Approved as Corrected").length;

    document.getElementById("Revise &amp; Resubmit").textContent =
        allDocs.filter(d => d.status === "Revise & Resubmit").length;

    document.getElementById("draft").textContent =
        allDocs.filter(d => d.status === "Draft").length;
     
    document.getElementById("dueThisWeek").textContent = 0
        allDocs.filter(d => d.status === "Due This Week").length;    
    
    document.getElementById("superseded").textContent =
        allDocs.filter(d => d.status === "Superseded").length;  

    // Placeholder until due dates are added
    document.getElementById("overdue").textContent = 0;

}

loadDashboard();
