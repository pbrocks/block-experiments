/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';
import icon from './icon';

const { name, category, attributes } = metadata;

export { metadata, name };

export const settings = {
	title: __( 'Details' ),
	description: __( 'Create a toggle to show and hide content.' ),
	icon,
	category,
	edit,
	save,
	// details and summary are not translated because they are the HTML tags
	keywords: [ 'details', 'summary', __( 'faq' ), __( 'spoiler' ) ],
	attributes,
	styles: [
		{
			name: 'disclosure',
			label: __( 'Open / Close' ),
			isDefault: true,
		},
		{
			name: 'flipcard',
			label: __( 'Flip Card' ),
		},
		{
			name: 'modal',
			label: __( 'Modal' ),
		},
	],
};

export function registerBlock() {
	registerBlockType( name, settings );
}