import GlobalSortComponent from './global-sort.svelte';
import { ModuleBase, ModuleType } from '../base';

class GlobalSort implements ModuleBase{
    constructor() {

    }

    getType(): ModuleType {        
        return {
            typeName: 'globalSort',
            typeClass: GlobalSortComponent
        }
    }
}

export default GlobalSort;