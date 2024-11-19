/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ExtPG.Application',

    name: 'ExtPG',

    requires: [
        // This will automatically load all classes in the ExtPG namespace
        // so that application classes do not need to require each other.
        'ExtPG.*'
    ],

    // The name of the initial view to create.
    mainView: 'ExtPG.view.main.Main'
});
