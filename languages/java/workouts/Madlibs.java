import java.util.Scanner;

public class Madlibs {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String adjective1, adjective2, noun1, noun2, pluralNoun1, pluralNoun2, pluralNoun3, verb1, verb2;
        System.out.print("Enter an adjective: ");
        adjective1 = sc.nextLine();
        System.out.print("Enter another adjective: ");
        adjective2 = sc.nextLine();
        System.out.print("Enter a noun: ");
        noun1 = sc.nextLine();
        System.out.print("Enter another noun: ");
        noun2 = sc.nextLine();
        System.out.print("Enter a plural noun: ");
        pluralNoun1 = sc.nextLine();
        System.out.print("Enter another plural noun: ");
        pluralNoun2 = sc.nextLine();
        System.out.print("Enter one more plural noun: ");
        pluralNoun3 = sc.nextLine();
        System.out.print("Enter a verb: ");
        verb1 = sc.nextLine();
        System.out.print("Enter another verb: ");
        verb2 = sc.nextLine();

        System.out.println("Here is your Madlib story:");
        System.out.println("The " + adjective1 + " " + noun1 + " jumped over the " + adjective2 + " " + noun2 + ".");
        System.out.println("It was a " + pluralNoun1 + " of " + pluralNoun2 + " and " + pluralNoun3 + ".");
        System.out.println("The " + noun1 + " " + verb1 + " and " + verb2 + " all day long.");
    }
}