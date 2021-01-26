// from data.js
var tableData = data;
d3.select('button').on('click', handleClick);

function showTable (data) {
    d3.select('tbody').html('');
    data.forEach(obj => {
        var row= d3.select('tbody').append('tr');
        Object.values(obj).forEach(val=>{
            var cell= row.append('td');
            cell.text(val);

        });
        
    });
};

function handleClick() {
    var filterData=data;
    var value= d3.select('input').property('value');
    if (value) {
        filterData=filterData.filter(obj=> obj.datetime == value);
    };
    d3. select('input').property('value', '');
    showTable(filterData);
};

