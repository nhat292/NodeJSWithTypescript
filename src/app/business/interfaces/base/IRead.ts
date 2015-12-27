interface IRead<T> {
    retrieve: (callback: (error: any, result: T)=> void)=> void ;
    findById: (id:number, callback: (error:any, result: T) => void) => void;    
}

export = IRead;