function showAccordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;

            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";

            }
        });
    }
}



var papers = ["Metallosupramolecular Assembly of Cr and p-Terphenyldinitrile by Dissociation of Metal Carbonyls on Au(111).",
    "Fabrication of a High-Quality, Porous, Surface-Confined Covalent Organic Framework on a Reactive Metal Surface.",
    "Two-dimensional self-assembly of benzotriazole on an inert substrate.",
    "Simple direct formation of self-assembled N-heterocyclic carbene monolayers on gold and their application in biosensing.",
    "Etching metal using N-heterocyclic carbenes.",
    "N-Heterocyclic Carbene Self-assembled Monolayers on Copper and Gold: Dramatic Effect of Wingtip Groups on Binding, Orientation and Assembly.",
    "Investigation of Robust Surface Molecular Architectures under Ultra-High Vacuum.",
    "On-surface condensation of low-dimensional benzotriazole-copper assemblies.",
];


var theAuthors = ["Anderson, A.E., Grillo, F., Larrea, C.R., Seljamäe-Green, R.T., Früchtl, H.A. and Baddeley, C.J., 2016. The Journal of Physical Chemistry C, 120(2), pp.1049-1055.",
    "Larrea, C.R. and Baddeley, C.J., 2016. ChemPhysChem, 17(7), pp.971-975.",
    "Grillo, F., Torres, J.G., Treanor, M.J., Larrea, C.R., Göetze, J.P., Lacovig, P., Früchtl, H.A., Schaub, R. and Richardson, N.V., 2016. Nanoscale, 8(17), pp.9167-9177.",
    "Crudden, C.M., Horton, J.H., Narouz, M.R., Li, Z., Smith, C.A., Munro, K., Baddeley, C.J., Larrea, C.R., Drevniok, B., Thanabalasingam, B. and McLean, A.B., 2016. Nature communications, 7(1), pp.1-7.",
    "Mariampillai, B.E., Alrashed, A.R.E., Crudden, C. M., Horton, J.H., Baddeley, C.J., Larrea, C.R., 2016. Patents: CA3026196A1, WO2017205980A1.",
    "Larrea, C.R., Baddeley, C.J., Narouz, M.R., Mosey, N.J., Horton, J.H. and Crudden, C.M., 2017. ChemPhysChem, 18(24), pp.3536-3539.",
    "Larrea, C.R., 2018. PhD Thesis, University of St Andrews, Scotland, GB.",
    "Grillo, F., Batchelor, D., Larrea, C.R., Francis, S.M., Lacovig, P. and Richardson, N.V., 2019. Nanoscale,11(27), pp.13017-13031."

];

var linkToPaper = ["https://pubs.acs.org/doi/pdf/10.1021/acs.jpcc.5b10489",
    "https://chemistry-europe.onlinelibrary.wiley.com/doi/epdf/10.1002/cphc.201600027",
    "https://pubs.rsc.org/en/content/articlepdf/2016/nr/c6nr00821f",
    "https://www.nature.com/articles/ncomms12654",
    "https://patents.google.com/patent/CA3026196A1/en",
    "https://chemistry-europe.onlinelibrary.wiley.com/doi/epdf/10.1002/cphc.201701045",
    "https://research-repository.st-andrews.ac.uk/handle/10023/14231",
    "https://pubs.rsc.org/en/content/articlelanding/2019/nr/c9nr04152d#!divAbstract"
];


var currentPaper = 0;

function nextPaper() {

    if (currentPaper == papers.length) {
        currentPaper = 0;
    }

    p = document.getElementById("paperID");
    s = document.getElementById("authorID");
    l = document.getElementById("linkID");

    p.innerHTML = papers[currentPaper];
    s.innerHTML = theAuthors[currentPaper];
    l.href = linkToPaper[currentPaper];

    currentPaper += 1;
}




function showSection(n) {
    var all = document.getElementsByClassName("sectionInfo");

    for (var i = 0; i < all.length; ++i) {

        if (all[i].id != n) {
            document.getElementById(all[i].id).style.display = "none";
        } else {
            document.getElementById(all[i].id).style.display = "flex";
        }
    }
}

function showMobileNav() {
    let x = document.getElementById("menuLinks");
    if (x.style.height != "30vh") {
        x.style.height = "30vh";
    } else {
        x.style.height = "0";
    }


}