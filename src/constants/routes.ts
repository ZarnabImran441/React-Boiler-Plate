const general = {
    home: '/',
    dynamic: ({
        queryParams,
        location,
        forceRefresh,
    }: {
        queryParams?: {[key: string]: string};
        forceRefresh?: boolean;
        location: Location;
    }) => {
        const existingParams = Object.fromEntries(new URLSearchParams(location.search));
        return `${location.pathname}${
            queryParams
                ? `?${new URLSearchParams(
                      forceRefresh ? queryParams : {...existingParams, ...queryParams},
                  ).toString()}`
                : ''
        }`;
    },
};

export default {
    ...general,
};
