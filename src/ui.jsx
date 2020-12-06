const React = require('react');
const { Box, Text } = require('ink');
const BigText = require('ink-big-text');
const Gradient = require('ink-gradient');
const SelectInput = require('ink-select-input').default;
const open = require('open');

// Gradient themes -> 'cristal', 'teen', 'mind', 'morning', 'vice', 'passion', 'fruit', 'instagram', 'atlas', 'retro', 'summer', 'pastel', 'rainbow'
function menu() {

  const [val, setVal] = React.useState("none");

  const handleSelect = item => {
    if (item.url) {
      open(item.url);
      setVal("none");
    }
    else if (item.action) {
      item.action();
    }
    else {
      setVal("flex");
    }
  };

  return (
    <Box flexDirection="column">
      <Gradient name="pastel">
        <BigText text=" Aman Raj" />
      </Gradient>
      <Box marginBottom={1}>
        <Text>          CSE UG student at IIIT Vadodara, India </Text>
      </Box>
      <Box display={val} marginBottom={1}>
        <Text>  Hi, I'm a third-year undergraduate in Computer Science and Engineering at Indian Institute of
        Information Technology Vadodara. I’m interested in Mathematics, Algorithms, Blockchain, and
        Web Development.
        </Text>
      </Box>
      <Box display={val} marginBottom={1}>
        <Text>  Previously while working as a Software Engineer Intern at Hapramp Studio, I gained experience
        in working with teams, fixing bugs, as well as coding in TypeScript (NextJS), Python, Git, AWS. Additionally, I have leveraged my knowledge of
        JavaScript to help in the development of their new product GoSocial with 10k daily active users.
        </Text>
      </Box>
      <Box display={val} marginBottom={1}>
        <Text>  I hold the position of the Developer Lead of the IIITV Coding Club, where we conduct
        workshops, programming contests, and events for the college student community. I am also the
        maintainer of the IIITV Open Source Org on GitHub where we collaborate with people both in
        and out of our college to work on OS Projects that we care about. Apart from this, I also hold the
        position of the Web Lead at the Developer Student Club (DSC) IIITV. I also do a bit of
        Competitive Programming.
        </Text>
      </Box>
      <SelectInput items={items} onSelect={handleSelect} />
    </Box>
  )
}

// create options from array using ink-select-input
const createItems = items => {
  for (const item of items) {
    item.key = item.url || item.label;
  }
  return items;
};

const items = createItems([
  {
    label: '🎓  About me',
  },
  {
    label: '🚀  Website',
    url: 'http://amanraj.me/'
  },
  {
    label: '🌊  Blog',
    url: 'http://aman-ki-baat.vercel.app/'
  },
  {
    label: '⚡  GitHub',
    url: 'https://github.com/AmanRaj1608'
  },
  {
    label: '🦚  Twitter',
    url: 'https://twitter.com/AmanRaj1608'
  },
  {
    label: '📬  Email',
    url: 'mailto:archanaamanraj@gmail.com'
  },
  {
    label: '👔  Résumé',
    url: 'https://amanraj.me/Aman_Raj.pdf'
  },
  {
    label: '⛱️   Quit',
    action() {
      process.exit();
    }
  }
]);

module.exports = menu;
