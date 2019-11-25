interface ModuleType {
    typeName: string;
    typeClass: any
}

interface ModuleBase {
    getType(): ModuleType;
}

export { ModuleType };
export default ModuleBase;
