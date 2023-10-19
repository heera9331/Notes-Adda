import java.util.ArrayList;

public class Main {
    public static void main(String args[]) {
        // System.out.printf("%ld", 1/2);

        int nums[] = { 0, 0, 1, 1, 1, 2, 3, 4, 4 };
        ArrayList<Integer> a = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {

            while (i + 1 < nums.length && nums[i] == nums[i + 1]) {
                i++;
            }
            a.add(nums[i]);
        }

        System.out.println(a);
    }
}