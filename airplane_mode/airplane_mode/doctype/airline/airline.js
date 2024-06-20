// Copyright (c) 2024, Shivansh and contributors
// For license information, please see license.txt

frappe.ui.form.on('Airline', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('Airline', {
    refresh: function(frm) {
        if (frm.doc.website) {
            // Ensure the section exists or create it
            if (!frm.sidebar.website_section) {
                  frm.sidebar.website_section = $('<div>')
                    .css({
                        'margin-top': '180px',
                        'padding': '10px',
                        'border': '1px solid #d1d8dd',
                        'border-radius': '5px',
                        'background-color': '#f7f8fa'
                    })
                    .appendTo(frm.sidebar);

                $('<h5>').text(__('Visit Website')).appendTo(frm.sidebar.website_section);
            }

            // Clear previous content
            frm.sidebar.website_section.empty();

            // Add the link
            $('<a>')
                .attr('href', frm.doc.website)
                .attr('target', '_blank')
                .css({
                    'color': '#007bff',
                    'text-decoration': 'none',
                    'word-break': 'break-word'
                })
                .text(frm.doc.website)
                .appendTo(frm.sidebar.website_section);
        } else {
            // Remove the section if no website is set
            if (frm.sidebar.website_section) {
                frm.sidebar.website_section.remove();
                frm.sidebar.website_section = null;
            }
        }
    }
});
 