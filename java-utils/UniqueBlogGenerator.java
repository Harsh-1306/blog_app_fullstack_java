import java.util.Random;

public class UniqueBlogGenerator {

    private static final String[] titleTemplates = {
            "The Future of %s in %s",
            "How to Master %s for %s",
            "%s Tips Every %s Developer Should Know",
            "Why %s is Revolutionizing %s",
            "Top 10 %s Practices for Better %s"
    };

    private static final String[] contentTemplates = {
            "In today's digital age, %s is becoming a cornerstone of %s. This blog explores how to leverage it effectively.",
            "If you're working with %s, understanding its impact on %s is crucial. Let's break it down.",
            "Many developers overlook %s when dealing with %s, but it's a key factor for performance and scalability.",
            "%s has evolved over the years, especially in %s. Here's what you need to know.",
            "Combining %s with %s can lead to amazing results — this guide shows you how."
    };

    private static final String[] buzzwords = {
            "AI", "Blockchain", "Java", "Microservices", "Cloud", "Kubernetes",
            "Docker", "React", "Node.js", "MongoDB", "Data Structures", "REST APIs",
            "Spring Boot", "Frontend", "Backend", "Full-Stack", "Web3", "DevOps"
    };

    public static void main(String[] args) {
        Random rand = new Random();

        // Pick random words
        String word1 = buzzwords[rand.nextInt(buzzwords.length)];
        String word2 = buzzwords[rand.nextInt(buzzwords.length)];
        while (word1.equals(word2))
            word2 = buzzwords[rand.nextInt(buzzwords.length)];

        // Apply random templates
        String title = String.format(titleTemplates[rand.nextInt(titleTemplates.length)], word1, word2);
        String content = String.format(contentTemplates[rand.nextInt(contentTemplates.length)], word1, word2);

        // Print
        System.out.println("🆔 Blog ID: " + (1000 + rand.nextInt(9000)));
        System.out.println("📌 Title: " + title);
        System.out.println("📝 Content: " + content);
    }
}
