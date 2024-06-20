
// change Parent DocType
frappe.ui.form.on('Airplane Ticket', {
    validate: function (frm) {
      var existingValues = [];
      var duplicatesFound = false;
  
      // change child_table . Iterate through the child table rows
      frm.doc.add_ons.forEach(function (row) {
         // change unique_field
        var fieldValue = row.item;
  
        if (existingValues.indexOf(fieldValue) !== -1) {
          // Duplicate value found
          duplicatesFound = true;
          frappe.msgprint(__('Duplicate value in child table: {0}', [fieldValue]));
          frappe.validated = false; // Prevent saving
          return false; // Exit the loop
        }
  
        existingValues.push(fieldValue);
      });
  
      if (!duplicatesFound) {
        frappe.validated = true; // No duplicates found, allow saving
      }
    },
  });