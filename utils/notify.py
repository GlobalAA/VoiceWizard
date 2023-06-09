from plyer import notification


def show(title, message):
	notification.notify(
		title,
		message,
		timeout=3
	)