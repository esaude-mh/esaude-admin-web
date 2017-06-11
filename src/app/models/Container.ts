export class Image {
  registry: string;
  name: string;
  version: string;
};

export class Port {
  ip: string;
  private: number;
  public: number;
  protocol: string;
};

export class Mount {
  type: string;
  name: string;
  source: string;
  destination: string;
}

export class Container {
  id: string;
  name: string;
  image: Image;
  ports: Port[];
  networks: string[];
  mounts: Mount[];
  created: {
    timestamp: number;
    display: string;
  };
  state: string;
  status: string;
};
