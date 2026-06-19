
async function selectionSort()
{
    disableControls();

    let bars =
    document.querySelectorAll(".bar");

    for(let i=0;i<arr.length;i++)
    {
        let minIndex = i;

        bars[minIndex]
        .style.background =
        "red";

        for(let j=i+1;
            j<arr.length;
            j++)
        {

            bars[j]
            .style.background =
            "yellow";

            await delay(
            1100-speedSlider.value
            );

            if(arr[j] < arr[minIndex])
            {
                bars[minIndex]
                .style.background =
                "cyan";

                minIndex = j;

                bars[minIndex]
                .style.background =
                "red";
            }
            else
            {
                bars[j]
                .style.background =
                "cyan";
            }
        }

        let temp = arr[i];

        arr[i] = arr[minIndex];

        arr[minIndex] = temp;

        bars[i].style.height =
        `${arr[i]}px`;

        bars[minIndex].style.height =
        `${arr[minIndex]}px`;

        bars[minIndex]
        .style.background =
        "cyan";

        bars[i]
        .style.background=
        "green";
    }

    enableControls();
}