import GlobalSearchComponent from './global-search.svelte';
import { ModuleBase, ModuleType } from '../base';

class GlobalSearch implements ModuleBase{
    constructor() {

    }

    getType(): ModuleType {        
        return {
            typeName: 'globalSearch',
            typeClass: GlobalSearchComponent
        }
    }
}

export default GlobalSearch;