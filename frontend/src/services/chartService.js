const getChartData = (map) => {
    const sortedKeys = Object.keys(map).sort((a, b) => a.charCodeAt() - b.charCodeAt())
    return (
        {
            labels: sortedKeys.map(key => 'Class ' + key),
            datasets: [
                {
                    backgroundColor: ['#28e6c0', '#52c0fa'],
                    borderColor: 'transparent',
                    borderWidth: 2,
                    data: sortedKeys.map(key => map[key])
                }
            ]
        }
    )
}

export const chartService = {
    getChartData
}
