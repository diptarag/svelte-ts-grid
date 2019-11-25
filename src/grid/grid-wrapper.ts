import GridComponent from './grid.svelte';
import { ModuleBase, ModuleType, GridDataTable } from '../base';

interface GridConfig {    
    name: string;
}

class Grid {
    private gridConfig: GridConfig;
    private container: HTMLElement;
    private dataTable: any;
    private gridDataTable: GridDataTable;
    modules: any = {};

    constructor(container: HTMLElement, dataTable: any, config: GridConfig) {
        this.container = container;
        this.gridConfig = config;
        this.dataTable = dataTable;
        this.gridDataTable = new GridDataTable(this.dataTable);
    }

    addModule(module: ModuleBase) {
        const moduleType: ModuleType = module.getType();
        this.modules[moduleType.typeName] = moduleType.typeClass;
    }

    render() {
        let gridComponent = new GridComponent({
            target: this.container,
            props: { 
                ...this.gridConfig, 
                gridDataTable: this.gridDataTable,
                modules: this.modules }
        });
    }
}

export default Grid;

