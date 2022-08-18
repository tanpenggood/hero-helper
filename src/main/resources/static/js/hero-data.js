const defaultTriggerEventForm = {
    eventName: undefined,
    sids: [],
    targetRunRound: 1,
    novice: false,
    resources: undefined,
    isSupplyGrain: false,
}

function eventDashboardColumns() {
    return [
        {
            title: 'Operation', dataIndex: 'operation', key: 'operation', fixed: 'left', width: 280,
            slots: {customRender: 'operation'},
        },
        {title: 'User', dataIndex: 'user', key: 'user', fixed: 'left', width: 200, ellipsis: true},
        {title: 'Event Name', dataIndex: 'eventName', key: 'eventName',},
        {title: 'Status', dataIndex: 'status', key: 'status', width: 100,  slots: { customRender: 'status' },},
        {title: 'Target Run Round', dataIndex: 'targetRunRound', key: 'targetRunRound',},
        {title: 'Actual Run Round', dataIndex: 'actualRunRound', key: 'actualRunRound',},
        {title: 'Success Run Round', dataIndex: 'successRunRound', key: 'successRunRound',},
        {title: 'Operating Resource', dataIndex: 'currentOperationResource', key: 'currentOperationResource', ellipsis: true,},
        {title: 'Extend Info', dataIndex: 'extendInfo', key: 'extendInfo', ellipsis: true,},
        {title: 'Trigger Time', dataIndex: 'triggerTime', key: 'triggerTime',},
    ]
}

const defaultUserForm = {
    sid: undefined,
    scheme: 'http',
    domain: undefined,
    port: undefined,
    region: undefined,
    roleName: undefined,
    gameMainPageUrl: undefined,
}

function userDashboardColumns() {
    return [
        {
            title: 'Operation', dataIndex: 'operation', key: 'operation', fixed: 'left', width: 105,
            slots: {customRender: 'operation'},
        },
        {title: 'sid', dataIndex: 'sid', key: 'sid', fixed: 'left', width: 220,},
        {title: 'Role Name', dataIndex: 'roleName', key: 'roleName',},
        {title: 'Region', dataIndex: 'region', key: 'region',},
        {title: 'Domain', dataIndex: 'domain', key: 'domain',},
        {title: 'Port', dataIndex: 'port', key: 'port',},
        {title: 'Save Time', dataIndex: 'saveTime', key: 'saveTime',},
    ]
}
