Axios.post(url, payload)
      .then((res) => {
        setFormData((prevS) => ({
          ...prevS,
          means_of_id: {
            ...prevS.means_of_id,
            idIsValid: true,
          },
        }));
        if (res) {
          console.log("Results: ", res?.data?.data?.results);
          console.log("API: ", res);
          setIdentificationData((prevS) => ({
            ...prevS,
            results: res?.data?.data?.results,
          }));
          sessionStorage.setItem("fullname", res?.data?.data?.results?.personal_info?.full_name)
        }
      })
      .catch((err) => {
        // console.log({ err });
        if (err) {
          setTimeout(() => {
            setTextContent(
              <p className="text-danger">
                {`please re-enter your correct  ${
                  identity[formData.selected]?.value
                } details`}
              </p>
            );
          }, 1500);
        }
      })
      .finally(() => {
        setFormData((prevS) => ({
          ...prevS,
          isUploading: false,
        }));
        setTextContent("");
      });

      console.log({avatar_url, login, twitter_username, bio, created_at, public_repos, followers, following, location, blog, organizations_url});