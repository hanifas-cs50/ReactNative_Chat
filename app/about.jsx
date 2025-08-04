import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

function About() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>
        This is hanifas-cs50's work (my work :v)
      </ThemedText>
      <ThemedText style={[styles.title, { marginBottom: 30 }]}>
        Thanks for viewing it
      </ThemedText>

      <ThemedText style={styles.beforeLink}>
        Press this link to go to my github page:
      </ThemedText>
      <Link href="https://github.com/hanifas-cs50/">
        <ThemedText style={[styles.link, { marginBottom: 30 }]}>
          Github Link
        </ThemedText>
      </Link>

      <ThemedText style={styles.beforeLink}>
        Or just type this link (since pressing a linked text is fishy)
      </ThemedText>
      <ThemedText style={styles.link}>
        https://github.com/hanifas-cs50/
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  beforeLink: {
    fontSize: 16,
    textAlign: "center",
  },
  link: {
    color: "#3b82f6",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default About;
