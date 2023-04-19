import Sidebar from "./components/Sidebar";
import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import { HiOutlinePresentationChartLine, HiOutlineChartBar, HiOutlineChartPie } from "react-icons/hi2";

function App() {
  const sidebarItems = [
    {
      link: "/dashboard",
      icon: <HiOutlinePresentationChartLine className="text-white text-2xl" />,
      text: "Linechart",
    },
    {
      link: "/profile",
      icon: <HiOutlineChartBar className="text-white text-2xl" />,
      text: "Barchart",
    },
    {
      link: "/settings",
      icon: <HiOutlineChartPie className="text-white text-2xl" />,
      text: "Piechart",
    },
  ];
  return (
    <div className="flex flex-wrap">
      <div className="w-1/4 flex-shrink-0">
        <Sidebar sidebarItems={sidebarItems}/>
      </div>
      <div className="flex-grow">
        <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2">
          <Col numColSpan={1} numColSpanLg={2}>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 1</Metric>
            </Card>
          </Col>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 2</Metric>
          </Card>
          <Col>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 3</Metric>
            </Card>
          </Col>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 4</Metric>
          </Card>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 5</Metric>
          </Card>
        </Grid>
      </div>
    </div>
  );
}

export default App;
