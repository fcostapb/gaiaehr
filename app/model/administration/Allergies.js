/**
 GaiaEHR (Electronic Health Records)
 Copyright (C) 2013 Certun, inc.

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('App.model.administration.Allergies', {
	extend: 'Ext.data.Model',
	table: {
		name: 'allergies',
		comment: 'Allergies',
		data: 'App.data.administration.Allergies'
	},
	fields: [
		{
			name: 'id',
			type: 'int',
			comment: 'Allergies ID'
		},
		{
			name: 'summary',
			type: 'string',
			comment: 'Allegy Summary'
		},
		{
			name: 'allergy_name',
			type: 'string',
			comment: 'Allergy Name'},
		{
			name: 'allergy_type',
			type: 'Allergy Type'
		}
	]
});