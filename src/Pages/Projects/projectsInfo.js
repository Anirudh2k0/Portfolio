import { anirudh,
  RISEInfo,RISECard,
  uSucceedCard,uSucceedInfo,
  bodiguideCard,bodiguideInfo,
  APCard,APInfo } from "@/images";

export const projectsInfo = [

    {
      'id': 1,
      'title': 'uSucceed',
      'images': {
        'card': uSucceedCard,
        'flow': uSucceedInfo,
      },
      'description': 'Accepted at the iLRN2024, I built a Pedagogical Agent teaching CyberDefense to people in Neuro Divergent Spectrum in a gamified Setting in VR',
      'info': 'The escalating prevalence of cyber attacks underscores the critical need for comprehensive cybersecurity education. Traditional methods often lack the practical, hands-on training necessary to effectively counter these threats, necessitating innovative approaches that combine theoretical knowledge with practical skills. In this context, the rapid advancement of VR technology presents a transformative opportunity. VR Learning Environments (VRLEs) offer immersive and engaging experiences, providing a platform to address the challenges of cybersecurity education effectively. Researchers have highlighted the potential of game-based learning in VR environments to simulate cyber threats and facilitate experiential learning. By leveraging VRLEs, there is a potential to create dynamic and interactive learning environments where students can navigate simulated cyber incidents, develop practical skills, and retain knowledge. In this project, we present a novel framework viz., "CyEscape" to explore the above potential by combining the power of VRLEs with cybersecurity education. CyEscape offers escape rooms set in VR environments, where learners navigate real-world cybersecurity incidents guided by pedagogical agents driven by Reinforcement Learning (RL), and overcome attack impacts using active defense techniques. The framework components ensure personalized feedback and adaptive learning experiences for students, fostering a deeper understanding of cybersecurity concepts and skills. Utilizing state-of-the-art technologies such as OpenAI, CyEscape advances cybersecurity education by fostering immersive, interactive, and effective learning.',
      'youtube': '',
    },
    {
      'id': 2,
      'title': 'RISE',
      'images': {
        'card': RISECard,
        'flow': RISEInfo,
      },
      'description': 'Presented this at the IEEE-ICHMS2024 Conference at Toronto. I automated upscale Scientific Imaging enforcing RL and Chatbot reducing manual intervention & saving millions in USD.',
      'info': 'Scientific experimentation, especially in fields like materials and biomedical science, often relies on manual control of specialized instruments and data processing. This process encompasses the operation of instruments such as scanning electron microscopes (SEM), the management of large volumes of image data, and the subsequent analysis, typically conducted a posteriori using various analytic tools. This manual approach not only consumes valuable time but also introduces inconsistencies and errors, ultimately leading to suboptimal experimental outcomes. Addressing this challenge, we propose the Remote Instrumentation Science Environment (RISE), a cloud-based platform designed to streamline and automate the entire experimental process. RISE integrates remote scientific instruments, data centers, and machine learning-based image analysis within a unified framework. Central to RISE is its user-friendly interface, which guides users through instrument setup, data collection, and analysis while providing real-time feedback to steer the experiment towards desired outcomes. Leveraging cloudlets, RISE securely integrates remote instruments and data centers, offering seamless access via a high-level language API. Real-time analysis of collected images enables RISE to dynamically adjust instrument settings, guided by reinforcement learning (RL) and Imitation Learning (IL) agents, ensuring optimal experimental control. To validate the efficacy of RISE, we conducted two CNT experiments as use cases. In the first case, we characterized CNT images in real-time to identify optimal zoom, focus, and contrast parameters for image acquisition. In the second case, we developed a closed-loop experiment to control the growth rate of CNT forest synthesis. Our results demonstrate the effectiveness of RISE in enabling users to dynamically adjust instrument parameters, enhancing the quality of collected CNT images and accurately controlling the growth rate of CNT synthesis processes. Through its comprehensive automation and integration capabilities, RISE offers a transformative solution to streamline scientific experimentation, leading to improved accuracy, efficiency, and reproducibility in research endeavors.',
      'youtube': 'https://youtu.be/1lBPXd6rPtk?si=n7bdmF7s__CoGov4',
    },
    {
      'id': 3,
      'title': 'BODIGUIDE',
      'images': {
        'card': bodiguideCard,
        'flow': bodiguideInfo
      },
      'description': 'I led building the architecture of a secure automated pipeline in the Cloud (AWS) for medical grade IOT Devices.',
      'info': 'The advent of Internet of Things (IoT) sensors in healthcare has ushered in a new era of remote patient monitoring, offering unprecedented opportunities for comprehensive data analysis and healthcare management. However, this integration of IoT devices with electronic health records (EHR) and other datasets poses significant challenges, particularly in ensuring the security and privacy of sensitive healthcare information throughout the different stages in the Data Workflow. In response to these challenges, we present a pioneering approach to healthcare data management, centered around the development of a robust security reference architecture tailored specifically for IoT-based systems. Our framework addresses the unique security considerations inherent in remote patient monitoring, offering a comprehensive solution that encompasses data collection at the edge, secure transmission to cloud-based services for analytics, and storage and visualization in cloud-based applications. By focusing on a specific use case involving anklet sensors for monitoring, we delve into the intricacies of securing the entire data processing pipeline. From implementing stringent security measures at the edge to ensuring encrypted communication channels and access controls in the cloud, our architecture presents a holistic approach to safeguarding healthcare data. Furthermore, we provide detailed insights into the implementation strategies and risk mitigation measures associated with our security framework. Leveraging an AWS infrastructure test bed, we demonstrate the practical efficacy of our approach in real-world scenarios. Through a rigorous risk assessment, we showcase significant improvements in security posture, validating the effectiveness of our architecture in mitigating potential threats and vulnerabilities.',
      'youtube': '',
    },
    {
      'id':4,
      'title': 'WFMZ-TV',
      'images': {
        'card': APCard,
        'flow': APInfo,
      },
      'description': 'I built a full-stack application for Local Newsrooms for automatic news classification based on DynamoDB, S3, Graph APIs, Flask and React and hosted the application on an EC2 and reduced the cost by 80%.',
      'info': "Local news organizations face myriad challenges in handling copious amounts of data and information. The current approach of manually reviewing, classifying and publishing news or analyzing raw news source data from public or law enforcement agencies leads to reduced quality, scale and timeliness in handling important news. We present AI/ML-driven solutions to automate mundane processes involved with news content curation and storytelling. We present two pipelines particularly targeting local newsrooms with resource limitations that can be aided by automation solutions. The first automated pipeline performs a newsworthiness assessment from e-mail data and involves a neural network approach to classify the news as `Worthy`, `Not Worthy` or `Unsure`. The second automated pipeline addresses news storytelling from police blotters encompassing multiple law enforcement agencies, and involves multi-format parsers to streamline the collection, formatting, and publication. Experiment results of our first pipeline shows our approach achieves an accuracy rate of 91% after successful and seamless integration of the classifier with real-world datasets. Integration results of our second pipeline shows that our approach had 96\% effectiveness in seamless integration with story generation technology for reporting crime incidents. User surveys of both the automated pipelines demonstrate that they benefit local newsrooms by reducing processing time of news feeds, saving cloud computing costs, and improving operational efficiency/scale of news dissemination.",
      'youtube': '',
    },
  ];
