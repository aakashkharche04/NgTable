tableModule.controller('IndexController', ['$scope', '$log', 'NgTableParams','MockData', function ($scope, $log, NgTableParams,MockData) {
    var indexCon = this;
    indexCon.countsArray = [2, 4, 6, 8];
    indexCon.tableFilter = {
        name: null,
        age: null
    };

    indexCon.tableData = MockData.getTableData();
    indexCon.totalCount = indexCon.tableData.length;
    indexCon.activeRows = 2;

    indexCon.tableParams = new NgTableParams({}, { data: indexCon.tableData });
    
    indexCon.getTableParams = function () {
        var parameters = {
            count: indexCon.activeRows,
            filter: indexCon.tableFilter,
            sorting: {
                name: 'asc',
                age: 'asc'
            }
        };
        var settings = {
            total: indexCon.totalCount,
            counts: indexCon.countsArray,
            dataset:indexCon.tableData
        };
        return new NgTableParams(parameters, settings);
    };
    indexCon.getTableParams().data = indexCon.tableData;
    indexCon.tableParams = indexCon.getTableParams();
}]);