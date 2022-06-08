const initialState = {
  children: [
    {
      title: "Country",

      children: [],
    },

    {
      title: "Rock",

      children: [
        {
          title: "Classic Rock",

          children: [],
        },

        {
          title: "Alternative",

          children: [],
        },

        {
          title: "Grunge",

          children: [],
        },
      ],
    },

    {
      title: "Electronic Music",

      children: [
        {
          title: "Ambient",

          children: [],
        },

        {
          title: "Techno",

          children: [],
        },

        {
          title: "Jungle",

          children: [],
        },

        {
          title: "Industrial",

          children: [],
        },

        {
          title: "Drum and bass",

          children: [],
        },

        {
          title: "House",

          children: [
            {
              title: "Rock",

              children: [
                {
                  title: "Classic Rock",

                  children: [],
                },

                {
                  title: "Alternative",

                  children: [],
                },

                {
                  title: "Grunge",

                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default initialState;
