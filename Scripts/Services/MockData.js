tableModule.service('MockData', ['$log', function ($log) {

    this.tableData = [{ name: "aaksh", age: 34 },
                { name: "rohit", age: 23 },
                { name: "rishi", age: 12 },
                { name: "geetesh", age: 45 },
                { name: "vivek", age: 22 }];

    this.getTableData = function () {
        return this.tableData;
    };
}]);