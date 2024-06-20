# Copyright (c) 2024, Shivansh and contributors
# For license information, please see license.txt

import frappe
import random
import string
from frappe.model.document import Document

class AirplaneTicket(Document):
	def before_save(self):
		if self.add_ons:
			total1 = 0
			for i in self.add_ons:
				total1 += i.amount
				if self.flight_price:
					self.total_amount = self.flight_price + total1
				else:
					self.total_amount = total1
	
	
def before_submit(self, method):
	if self.status != "Boarded":
		frappe.throw('Airplane Ticket Status should be Boarded to Submit this document')

def generate_seat_no(self):
    random_integer = random.randint(1, 99)
    random_letter = random.choice(string.ascii_uppercase[:5])
    seat_number = f"{random_integer}{random_letter}"
    return seat_number

def set_seat_number(self, method):
    if not self.seat:
        self.seat = generate_seat_no(self)

def after_submit_status(self, method):
    if self.doctype == "Airplane Ticket":
        airplane_flight = frappe.get_doc("Airplane Flight", self.flight)
        if airplane_flight:
            airplane_flight.status = "Completed"
            airplane_flight.save()





