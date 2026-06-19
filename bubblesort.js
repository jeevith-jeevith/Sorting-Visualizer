
async function bubbleSort()
{
    disableControls();
    let bars =
    document.querySelectorAll(".bar");

    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;
            j<arr.length-i-1;
            j++)
        {

            bars[j].style.background =
            "#ff4d6d";

            bars[j+1].style.background =
            "#ff4d6d";


            await delay(1100-speedSlider.value);

            if(arr[j] > arr[j+1])
            {
                bars[j].style.background =
                "#ffd60a";

                bars[j+1].style.background =
                "#ffd60a";

                await delay(1100-speedSlider.value);

                let temp = arr[j];

                arr[j] = arr[j+1];

                arr[j+1] = temp;

                bars[j].style.height =
                `${arr[j]}px`;

                bars[j+1].style.height =
                `${arr[j+1]}px`;
            }

            bars[j].style.background =
            "linear-gradient(to top,#00f5ff,#8b5cf6)";

            bars[j+1].style.background =
            "linear-gradient(to top,#00f5ff,#8b5cf6)";
        }

        bars[arr.length-i-1]
        .style.background = "#00ff88";
  
    }
    enableControls();
}