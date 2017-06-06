import test   from 'ava';
import {Defaults, Types, DataObject} from '../../src/models';

const defaults = {
    settings: {
        vue: {
            componentsDir: '/baz',
            defaultLayout: 'qux'
        },
        views: '/foo/bar'
    }
};
const types         = new Types();
const defaultObject = new Defaults(defaults);
const dataObject    = new DataObject(defaults, defaultObject, types.COMPONENT);
const dataObjectSub = new DataObject(defaults, defaultObject, types.SUBCOMPONENT);

//Examples
const componentsDir = '/baz/';
const rootPath      = '/foo/bar/';
const backupLayout  = '<template><!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><script src="https://unpkg.com/vue/dist/vue.js"></script></head><body>{{{app}}}{{{script}}}</body></html></template><script></script><style></style>';
const defaultLayout = '/foo/bar/qux';

test('Components Directory', t => {
    t.is(defaultObject.componentsDir, componentsDir);
});

test('Root Path', t => {
    t.is(defaultObject.rootPath, rootPath);
});

test('Backup Layout', t => {
    t.is(defaultObject.backupLayout, backupLayout);
});

test('Default Layout', t => {
    t.is(defaultObject.defaultLayout, defaultLayout);
});
