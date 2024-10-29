import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Core
import { Box } from "@mui/material";
import { Button } from "@components";

// Actions
import { getUser } from "@actions";

function ProfileGeneralPage() {
  const router = useRouter();

  const { slug } = router.query;

  const [profile, setProfile] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const user = await getUser(slug);

        return setProfile(user);
      } catch (error) {
        console.error('Error loading candidate:', error);
      }
    };

    if (slug) getData();
  }, [slug]);

  return (
    <Box>
      <Box>
        {profile?.username}
      </Box>
    </Box>
  );
}

export default ProfileGeneralPage;
