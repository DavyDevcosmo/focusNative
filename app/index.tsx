import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
	return (
		<View style={styles.container}>
			<Image source={require("./pomodoro.png")} />
			<View style={styles.actions}>
				<View style={styles.context}>
					<Pressable style={styles.contextButtonActive}>
						<Text style={styles.contextButtonText}>Foco</Text>
					</Pressable>
					<Pressable>
						<Text style={styles.contextButtonText}>Pausa curta</Text>
					</Pressable>
					<Pressable>
						<Text style={styles.contextButtonText}>Pausa longa</Text>
					</Pressable>
				</View>
				<Text style={styles.timer}>25:00</Text>

				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Começar</Text>
				</Pressable>
			</View>
			<View style={styles.footer}>
				<Text style={styles.footerText}>
					Porjeto ficticio desenvolvidor por Davy
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#021123",
		gap: 40,
	},
	actions: {
		paddingVertical: 24,
		paddingHorizontal: 24,
		backgroundColor: "#14448080",
		width: "80%",
		borderRadius: 32,
		borderWidth: 2,
		borderColor: "#144480",
		gap: 32,
	},
	context: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	contextButtonActive: {
		backgroundColor: "#144480",
		borderRadius: 8,
	},
	contextButtonText: {
		fontSize: 12.5,
		color: "#fff",
		padding: 8,
	},
	timer: {
		fontSize: 54,
		color: "#fff",
		textAlign: "center",
		fontWeight: "bold",
	},

	button: {
		backgroundColor: "#BB72FF",
		borderRadius: 32,
		padding: 8,
	},
	buttonText: {
		textAlign: "center",
		color: "#021123",
		fontSize: 18,
	},
	footer: {
		width: "80%",
	},
	footerText: {
		color: "#98A0AB",
		textAlign: "center",
		fontSize: 12.5,
	},
});
