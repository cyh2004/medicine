import axios, { AxiosError, AxiosResponse } from "axios";

const network = axios.create({
    baseURL: "",
});

enum NetworkErrorType {
    CORRUPTED_RESPONSE,
    UNKNOWN_ERROR,
}

export class NetworkError extends Error {
    type: NetworkErrorType;
    message: string;

    constructor(
        _type: NetworkErrorType,
        _message: string,
    ) {
        super();

        this.type = _type;
        this.message = _message;
    }

    toString(): string { return this.message; }
    valueOf(): Object { return this.message; }
}

export const request = async (
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    data?: any,
) => {
    if((method == "GET") && data != undefined) {
        url += "?";
        for(const key in data) {
            if(data[key] != undefined)
                url = url + key + "=" + data[key] + "&";
        }
        url = url.substring(0,url.length-1);
        data = null;
    }
    const response = await network.request({ method, url, data })
        .catch((err: AxiosError) => {

            throw new NetworkError(
                NetworkErrorType.UNKNOWN_ERROR,
                (err.response?.data as any).detail,
            );
        });

    if (response?.data.code === 0) {
        return { ...response.data, code: undefined };
    } else {
        /**
         * @note 这里的错误处理显然是极其粗糙的，大作业中你可以根据组内约定的 API 文档细化错误处理。
         *       然而事实上，如果按照类似本次小作业的 API 文档设计，即 code 不为 0 时 HTTP 状态码设为类似 400 等表示错误的状态，
         *       那么，该分支是事实不可达的，所有表示错误的 HTTP 状态响应应当在上面的 `catch` 块中已经被捕获。
         *       如果到达该分支，则说明后端的错误处理出现问题，code 和 HTTP 状态码一致性未正确处理。
         */

        throw new NetworkError(
            NetworkErrorType.UNKNOWN_ERROR,
            response?.data.detail,
        );
    }
};