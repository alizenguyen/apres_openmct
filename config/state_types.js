export const state_types ={
    "$schema": "./PlanningProjectSchema.json",
    "projectInfo": {
        "author": "John Bresina",
        "lastModDate": "2021-02-18",
        "projName": "RP no continuous effects",
        "projVersion": "Simple_Drill_plan.json 4.1",
        "modelName": "Simple RP Drill Model",
        "modelVersion": "Simple_Drill_model.ANML 2.3",
        "initCondsVersion": "Simple_Drill_init_conds 1.0",
        "note": "SIMPLE Example project for testing the initial version of EpSim"
    },
    "activityPlan": {
        "planStart": "2022-08-12T06:00:00Z",
        "planEnd": "2022-08-19T20:00:00Z",
        "actions": [
            {
                "uuid": "f9da8912-00f1-4c1f-899e-265a213e7896",
                "actionName": "drillCam_pwron1",
                "actionType": "DrillCam_PwrOn",
                "actionStart": "2022-08-14T12:30:00Z",
                "actionEnd": "2022-08-14T12:30:30Z",
                "note": "Required by DrillAuger"
            },
            {
                "uuid": "855b6ae1-b977-4fff-bea8-401d10e873c9",
                "actionName": "drillcam_op1",
                "actionType": "DrillCam_Operate",
                "actionStart": "2022-08-14T12:30:30Z",
                "actionEnd": "2022-08-14T15:00:00Z",
                "parameters": [
                    {
                        "name": "drillCamDur",
                        "value": 9000
                    }
                ]
            },
            {
                "uuid": "52b51d45-efae-4258-8e21-e28ea7ae5510",
                "actionName": "drill_unstow1",
                "actionType": "DrillUnstow",
                "actionStart": "2022-08-14T12:25:00Z",
                "actionEnd": "2022-08-14T13:45:00Z",
                "note": "Required by DrillAuger"
            },
            {
                "uuid": "1b129a37-d655-4858-aaef-e2fce4bd7207",
                "actionName": "auger1",
                "actionType": "DrillAuger",
                "actionStart": "2022-08-14T13:00:00Z",
                "actionEnd": "2022-08-14T14:00:00Z",
                "parameters": [
                    {
                        "name": "drillDur",
                        "value": 3600
                    }
                ],
                "note": "First auger at station A"
            },
            {
                "uuid": "f2ece2c0-6c8f-4d74-af96-2119e6b5d553",
                "actionName": "drill_stow1",
                "actionType": "DrillStow",
                "actionStart": "2022-08-14T14:30:00Z",
                "actionEnd": "2022-08-14T14:50:00Z",
                "note": "Required by Drive"
            },
            {
                "uuid": "2c2f3df1-28f1-4d8f-909d-22a829e4197f",
                "actionName": "drillCam_pwroff1",
                "actionType": "DrillCam_PwrOff",
                "actionStart": "2022-08-14T15:00:00Z",
                "actionEnd": "2022-08-14T15:00:30Z"
            }
        ],
        "simulationInfo": {
            "chronicles": [
                {
                    "variable": "Drill_sys",
                    "episodes": [
                        {
                            "time": "2022-08-12T06:10:00Z",
                            "value": "idle"
                        },
                        {
                            "time": "2022-08-14T13:00:00Z",
                            "value": "Auger"
                        },
                        {
                            "time": "2022-08-14T14:00:00Z",
                            "value": "idle"
                        }
                    ]
                },
                {
                    "variable": "DrillArm_sys",
                    "episodes": [
                        {
                            "time": "2022-08-12T06:10:00Z",
                            "value": "stowed"
                        },
                        {
                            "time": "2022-08-14T12:25:00Z",
                            "value": "Unstowing"
                        },
                        {
                            "time": "2022-08-14T13:45:00Z",
                            "value": "unstowed"
                        },
                        {
                            "time": "2022-08-14T14:30:00Z",
                            "value": "Stowing"
                        },
                        {
                            "time": "2022-08-14T14:50:00Z",
                            "value": "stowed"
                        }
                    ]
                },
                {
                    "variable": "DrillCam_sys",
                    "episodes": [
                        {
                            "time": "2022-08-12T06:10:00Z",
                            "value": "off"
                        },
                        {
                            "time": "2022-08-14T12:30:00Z",
                            "value": "PwrOn"
                        },
                        {
                            "time": "2022-08-14T12:30:30Z",
                            "value": "on"
                        },
                        {
                            "time": "2022-08-14T15:00:00Z",
                            "value": "PwrOff"
                        },
                        {
                            "time": "022-08-14T15:00:30Z",
                            "value": "off"
                        }
                    ]
                }
            ]
        }
    }
}
