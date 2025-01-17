/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';

import template from './documents.html!text';
import {RouteConfig} from '../../../ng-decorators'; // jshint unused: false

//start-non-standard
@RouteConfig('app.documents', {
    url: '/documents',
    template: template
})
//end-non-standard
class Documents {}
