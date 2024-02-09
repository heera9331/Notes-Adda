import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(1);
        // list.set(0, 4);
        list.add(0, 2);
        list.add(0, 1);
        System.out.println(list);
        Collections.reverse(list);
    }
}

// public class Main {
// static int lcs(String s1, String s2) {
// int max = 0;
// int n = s1.length();
// int m = s2.length();

// for (int i = 0; i < n; i++) {
// System.out.println(s1.substring(i, n));
// }

// return max;
// }

// public stati void main(String[] args) {
// String s1 = "abcefg";
// String s2 = "gfabcedfg";
// System.out.println(lcs(s1, s2));
// }
// }

// import java.util.*;

// class Patient {
// String name;
// int pincode;
// int phoneNumber;
// boolean is_corona;

// Patient(String name, int pincode, int phoneNumber, boolean is_corona) {
// this.name = name;
// this.pincode = pincode;
// this.phoneNumber = phoneNumber;
// this.is_corona = is_corona;
// }

// String getName() {
// return this.name;
// }

// int getPincode() {
// return this.pincode;
// }

// int getPhoneNumber() {
// return this.phoneNumber;
// }

// boolean getIsCorono() {
// return this.is_corona;
// }
// }

// class CoronaPatient {
// ArrayList<Patient> patientList;

// CoronaPatient() {
// patientList = new ArrayList<>();
// }

// void addPatient(Patient newPatient) {
// this.patientList.add(newPatient);
// }

// int countPositiveCases() {
// int cnt = 0;
// for (Patient patient : patientList) {
// if (patient.getIsCorono()) {
// cnt++;
// }
// }

// return cnt;
// }

// int getLessCases() {
// HashMap<Integer, Integer> cases = new HashMap<>();

// for (Patient patient : patientList) {
// if (patient.getIsCorono()) {
// int pincode = patient.getPincode();
// if (cases.containsKey(pincode)) {
// cases.put(pincode, cases.get(pincode) + 1);
// } else {
// cases.put(pincode, 1);
// }
// }
// }

// ArrayList<Integer> list = new ArrayList<>();
// for (Integer key : cases.keySet()) {
// list.add(cases.get(key));
// }

// Integer mn = Collections.min(list);
// for (Integer key : cases.keySet()) {
// if (cases.get(key) == mn) {
// return key;
// }
// }

// return -1;
// }
// }

// public class Main {
// public static void main(String[] args) {
// CoronaPatient coronaPatient = new CoronaPatient();
// coronaPatient.addPatient(new Patient("Heera", 470673, 123, true));
// coronaPatient.addPatient(new Patient("Deepak", 470673, 123, true));
// coronaPatient.addPatient(new Patient("Deepak", 470003, 123, true));
// coronaPatient.addPatient(new Patient("Yogesh", 470001, 123, false));

// System.out.println(coronaPatient.countPositiveCases());
// System.out.println(coronaPatient.getLessCases());
// }
// }

// public class Main {
// static class Node {
// int data;
// Node next;
// }

// static Node addFirst(Node head, int val) {
// Node newNode = new Node();
// newNode.data = val;
// if (head == null) {
// head = newNode;
// } else {
// newNode.next = head;
// head = newNode;
// }
// return head;
// }

// static void display(Node head) {
// Node ptr = head;
// while (ptr != null) {
// System.out.print(ptr.data + "->");
// ptr = ptr.next;
// }
// System.out.println("NULL");
// }

// public static void main(String[] args) {
// Node head = null;
// display(head);
// head = addFirst(head, 1);
// head = addFirst(head, 2);
// display(head);
// }
// }