import PaginationComponent from './pagination.svelte';
import { ModuleBase, ModuleType } from '../base';

class Pagination implements ModuleBase{
    constructor() {

    }

    getType(): ModuleType {        
        return {
            typeName: 'pagination',
            typeClass: PaginationComponent
        }
    }
}

export default Pagination;