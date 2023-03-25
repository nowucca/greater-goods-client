export const apiUrl =
	`${location.protocol}//${location.hostname}:`+
	`${location.port === "5173" ? "8080" : location.port}` +
	`${import.meta.env.BASE_URL}/api/`;
