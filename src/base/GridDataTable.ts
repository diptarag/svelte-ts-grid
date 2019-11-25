import { sort } from 'fusioncharts/datastore/operators';

interface GridData {
    data: Array<any>;
    schema: Array<any>;
}

export default class GridDataTable {
    private dataTable: any;
    private gridData: GridData = {
        data: [],
        schema: []
    };

    constructor(dataTable: any) {
        this.dataTable = dataTable;
        this.gridData = this.dataTable.getData();
    }

    getData(startIndex?: number, endIndex?: number): Array<any> {
        if (typeof startIndex === 'undefined' && typeof endIndex === 'undefined') {
            return this.gridData.data;
        } else {
            if (typeof startIndex === 'undefined') {
                startIndex = 1;
            }

            if (typeof endIndex === 'undefined') {
                endIndex = this.gridData.data.length;
            }
            return this.gridData.data.slice(startIndex - 1, endIndex);
        }        
    }
    
    getColumns(): Array<string> {
        return this.gridData.schema.map(x => x.name);
    }

    sort(columnName: string): Array<any> {
        let sortOperation: any = sort([
            {column: columnName}
        ]);

        let sortedDataTable: any = this.dataTable.query(sortOperation);

        return sortedDataTable.getData().data;
    }
}