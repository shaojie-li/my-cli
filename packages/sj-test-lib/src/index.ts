interface InitParams {
    option: string | undefined;
    param: string | undefined;
}

export class TestLib {
    static init(params: InitParams) {
        console.log("执行Init流程", { params });
    }
}
