document.addEventListener('DOMContentLoaded', function () {
    const dataUnitsInput = document.getElementById('dataUnitsInput');
    const percentageUsedInput = document.getElementById('percentageUsedInput');
    const powerOnHoursInput = document.getElementById('powerOnHoursInput');
    const calculateButton = document.getElementById('calculateButton');
    const totalLifespanOutput = document.getElementById('totalLifespanOutput');
    const remainingLifespanOutput = document.getElementById('remainingLifespanOutput');
    const dailyWriteOutput = document.getElementById('dailyWriteOutput');
    const remainingDaysOutput = document.getElementById('remainingDaysOutput');
    const remainingYearsOutput = document.getElementById('remainingYearsOutput');

    calculateButton.addEventListener('click', function () {
        const dataUnits = parseFloat(dataUnitsInput.value);
        const percentageUsed = parseFloat(percentageUsedInput.value);
        const powerOnHours = parseFloat(powerOnHoursInput.value);

        if (isNaN(dataUnits) || isNaN(percentageUsed) || isNaN(powerOnHours)) {
            alert('Please enter valid numbers');
            return;
        }

        const totalLifespan = calculateTotalLifespan(dataUnits, percentageUsed);
        const remainingLifespan = calculateRemainingLifespan(totalLifespan, dataUnits);
        const dailyWrite = calculateDailyWrite(dataUnits, powerOnHours);
        const remainingDays = calculateRemainingDays(remainingLifespan, dailyWrite);
        const remainingYears = calculateRemainingYears(remainingDays);

        totalLifespanOutput.value = totalLifespan.toFixed(2) + ' TB';
        remainingLifespanOutput.value = remainingLifespan.toFixed(2) + ' TB';
        dailyWriteOutput.value = dailyWrite.toFixed(3) + ' TB/day';
        remainingDaysOutput.value = remainingDays.toFixed(0) + ' days';
        remainingYearsOutput.value = remainingYears.toFixed(1) + ' years';
    });

    function calculateTotalLifespan(dataUnits, percentageUsed) {
        return (dataUnits / (percentageUsed / 100));
    }

    function calculateRemainingLifespan(totalLifespan, dataUnits) {
        return totalLifespan - dataUnits;
    }

    function calculateDailyWrite(dataUnits, powerOnHours) {
        return dataUnits / (powerOnHours / 24);
    }

    function calculateRemainingDays(remainingLifespan, dailyWrite) {
        return remainingLifespan / dailyWrite;
    }

    function calculateRemainingYears(remainingDays) {
        return remainingDays / 365;
    }
});