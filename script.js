
let container= document.getElementById("container");
let generateBtn=document.getElementById("generate");
let sortBtn=document.getElementById("sort");
let selectionBtn =document.getElementById("selection");
let insertionBtn=document.getElementById("insertion");
let speedSlider=document.getElementById("speed");
let sizeSlider= document.getElementById("size");
const currentAlgo = document.getElementById("currentAlgo");
const algoTitle =
document.getElementById("algoTitle");

const bestCase =
document.getElementById("bestCase");

const averageCase =
document.getElementById("averageCase");

const worstCase =
document.getElementById("worstCase");

const spaceComplexity =
document.getElementById("spaceComplexity");


let arr = [];

function generateArray()
{
      container.innerHTML = "";
      arr=[];
    for(let i=0;i<sizeSlider.value;i++)
    {
        let value= Math.floor(Math.random()*300)+20;
        arr.push(value);

        let bar =
        document.createElement("div");

        bar.classList.add("bar");

        bar.style.height =
        `${value}px`;

        container.appendChild(bar);
    }
        
}
function updateComplexity(
    algo,
    best,
    average,
    worst,
    space
)
{
    algoTitle.innerText =
    algo;

    bestCase.innerText =
    `Best Case : ${best}`;

    averageCase.innerText =
    `Average Case : ${average}`;

    worstCase.innerText =
    `Worst Case : ${worst}`;

    spaceComplexity.innerText =
    `Space : ${space}`;
}

function delay(ms)
{
    return new Promise(resolve =>
        setTimeout(resolve,ms)
    );
}

generateBtn.addEventListener(
    "click",
    generateArray
);

sortBtn.addEventListener(
    "click",
    async () =>
    {
        updateComplexity(
            "Bubble Sort",
            "O(n)",
            "O(n²)",
            "O(n²)",
            "O(1)"
        );

        await bubbleSort();
    }
);

sizeSlider.addEventListener(
    "input",
    function()
    {
        sizeText.innerText =
        `Size : ${sizeSlider.value}`;

        generateArray();
    }
);

speedSlider.addEventListener(
    "input",
    () =>
    {
        speedText.innerText =
        `Speed : ${speedSlider.value}`;
    }
);

selectionBtn.addEventListener(
    "click",
    async () =>
    {
        

        updateComplexity(
            "Selection Sort",
            "O(n²)",
            "O(n²)",
            "O(n²)",
            "O(1)"
        );

        await selectionSort();
    }
);

insertionBtn.addEventListener(
    "click",
    async () =>
    {
        

        updateComplexity(
            "Insertion Sort",
            "O(n)",
            "O(n²)",
            "O(n²)",
            "O(1)"
        );

        await insertionSort();
    }
);

function disableControls()
{
    generateBtn.disabled=true;
    sortBtn.disabled=true;
    sizeSlider.disabled=true;
}
function enableControls()
{
    generateBtn.disabled = false;

    sortBtn.disabled = false;

    sizeSlider.disabled = false;
}

generateArray();