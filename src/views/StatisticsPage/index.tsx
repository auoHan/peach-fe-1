import { defineComponent } from 'vue'
import { Charts } from '@/components/Statistics/Charts'
import { TimeTabsLayout } from '@/layouts/TimeTabsLayout'
export const StatisticsPage = defineComponent({
	setup: (props, context) => {
		return () => (
			<TimeTabsLayout rerenderOnSwitchTab={true} component={Charts}>
				hideThisYear={true}
			</TimeTabsLayout>
		)
	}
})
export default StatisticsPage
