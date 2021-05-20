post1 = Post.create(
  title: 'The 2021 Independent Watchmaking Fantasy Draft',
  description: 'The wonderful, weird, and wild of contemporary horology go head-to-head-to-head.',
  content: 'The wonderful, weird, and wild of contemporary horology go head-to-head-to-head.'
)

post1.image.attach(io: File.open('/app/spec/fixtures/images/1.jpg'), filename: '1.jpg')

post2 = Post.create(
  title: ' The Lindbergh Hour Angle Watch, Possibly The Most Toolish Tool Watch Ever Made',
  description: 'The wonderful, weird, and wild of contemporary horology go head-to-head-to-head.',
  content: 'The wonderful, weird, and wild of contemporary horology go head-to-head-to-head.'
)
post2.image.attach(io: File.open('/app/spec/fixtures/images/2.jpg'), filename: '2.jpg')

