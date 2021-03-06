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

Ext.define('App.model.administration.ComboListOption', {
	extend: 'Ext.data.Model',
	table: {
		name: 'combo_lists_options',
		comment: 'Combo List Options',
		data: 'App.data.administration.ComboListOption'
	},
	fields: [
		{
			name: 'id',
			type: 'int',
			comment: 'List Options ID'
		},
		{
			name: 'list_id',
			type: 'string',
			comment: 'List ID'
		},
		{
			name: 'option_value',
			type: 'string',
			comment: 'Value'
		},
		{
			name: 'option_name',
			type: 'string',
			comment: 'Name'
		},
		{
			name: 'seq',
			type: 'int',
			comment: 'SEQ'},
		{
			name: 'notes',
			type: 'string',
			comment: 'Notes'
		},
		{
			name: 'active',
			type: 'bool',
			comment: 'Active?'
		}
	]
});