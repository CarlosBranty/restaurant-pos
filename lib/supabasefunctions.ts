import supabase from "./store/supabase";
import { useUser } from "./store/user";

export const GetProfileData = async (userId: string) => {
  try {
    // Query the tb_profile table based on the user ID
    const { data, error } = await supabase
      .from("tb_profile")
      .select("*")
      .eq("id", userId);

    if (error) {
      console.error("Error fetching profile data:", error.message);
      return null;
    }
    console.log(data);
    // Return the profile data (assuming one user has one profile, adjust as needed)
    return data?.length > 0 ? data[0] : null;
  } catch (error) {
    console.error("Error in getProfileData function:");
    return null;
  }
};
