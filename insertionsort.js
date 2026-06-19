
async function insertionSort()
{
    disableControls();

    let bars =
    document.querySelectorAll(".bar");

    for(let i=0;i<arr.length;i++)
    {
        let j = i;

        while(
            j > 0 &&
            arr[j-1] > arr[j]
        )
        {

            bars[j].style.background =
            "red";

            bars[j-1].style.background =
            "red";

            await delay(
            1100-speedSlider.value
            );

            bars[j].style.background =
            "yellow";

            bars[j-1].style.background=
            "yellow";

            let temp = arr[j-1];

            arr[j-1] = arr[j];

            arr[j] = temp;

            bars[j-1].style.height =
            `${arr[j-1]}px`;

            bars[j].style.height =
            `${arr[j]}px`;

            await delay(
            1100-speedSlider.value
            );

            bars[j].style.background =
            "cyan";

            bars[j-1].style.background =
            "cyan";

            j--;
        }
    }

    for(let i=0;i<bars.length;i++)
    {
        bars[i].style.backgroundColor =
        "green";
    }

    enableControls();
}